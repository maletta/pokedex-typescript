import { useState } from "react";
import Papa, { LocalFile } from "papaparse";

interface CSVReaderResult<T> {
  data: T[];
  errors: Papa.ParseError[];
  meta: Papa.ParseMeta;
}

interface IUseCSVReaderProps<T> {
  transform?: (itens: T[]) => T[]
}

type IUseCSVReader<T, E> = (props: IUseCSVReaderProps<T>) => {
  dataRead: Result<T[], E> | undefined,
  errorRead: E | null,
  readCSV: (filePath: string) => Promise<void>
}

type Result<T, E> =
  | { type: 'right'; value: T }   // Representa um resultado bem-sucedido
  | { type: 'left'; error: E };    // Representa um erro

export const useCSVReader = <T = any, E extends string = string>(
  props?: IUseCSVReaderProps<T>
) => {
  const [dataRead, setDataRead] = useState<Result<T[], E>>();
  const [errorRead, setErrorRead] = useState<string | null>(null);
  const [isReadLoading, setIsReadLoading] = useState<boolean>(true);

  const readCSV = async (filePath: string) => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);

      Papa.parse<T>(csv, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setDataRead({ type: "right", value: props?.transform ? props?.transform(results.data) : results.data });
          setErrorRead(null);
          setIsReadLoading(false);
        },
        error: (err: Error) => {
          console.log("CSVReader Error")
          console.error(err)
          setErrorRead(`Error: ${err.message}`);
          setDataRead({ type: "left", error: err.message as E });
          setIsReadLoading(false);
        },
      })
    } catch (err) {
      setErrorRead(`Error: ${(err as unknown as Error).message}`);
      setIsReadLoading(false);
    }
  };

  return {
    dataRead,
    errorRead,
    readCSV,
    isReadLoading
  };
};