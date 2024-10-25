import { useState } from "react";
import Papa, { LocalFile } from "papaparse";

interface CSVReaderResult<T> {
  data: T[];
  errors: Papa.ParseError[];
  meta: Papa.ParseMeta;
}



type Result<T, E> =
  | { type: 'right'; value: T }   // Representa um resultado bem-sucedido
  | { type: 'left'; error: E };    // Representa um erro

export const useCSVReader = <T = any, E extends string = string>() => {
  const [dataRead, setDataRead] = useState<Result<T[], E>>();
  const [errorRead, setErrorRead] = useState<string | null>(null);

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
          setDataRead({ type: "right", value: results.data });
          setErrorRead(null);
        },
        error: (err: Error) => {
          console.log("CSVReader Error")
          console.error(err)
          setErrorRead(`Error: ${err.message}`);
          setDataRead({ type: "left", error: err.message as E });
        },
      });
    } catch (err) {
      setErrorRead(`Error: ${(err as unknown as Error).message}`);
    }
  };

  return {
    dataRead,
    errorRead,
    readCSV,
  };
};