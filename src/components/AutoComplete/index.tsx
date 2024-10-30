import TextInput from "components/TextInput";
import React, { useState, useEffect } from "react";
import { CSSObject } from "styled-components/macro";


interface ICSVPokemon {
  id: number;
  name: string;
  genre: string | null | undefined;
  type1: string;
  type2: string;
  generation: number;
}
interface AutocompleteProps {
  placeholder: string;
  suggestions: ICSVPokemon[];
  customCss?: CSSObject;
  handleChange?: (input: string, suggestions: ICSVPokemon[]) => void
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  suggestions,
  customCss,
  handleChange
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<ICSVPokemon[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(-1);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);


  useEffect(() => {
    const filtered = suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0 && inputValue.length > 0);
    handleChange && handleChange(inputValue, filtered)
  }, [inputValue, suggestions]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveSuggestionIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (activeSuggestionIndex >= 0) {
        handleSuggestionClick(filteredSuggestions[activeSuggestionIndex].name);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }
    }>
      <TextInput
        placeholder={placeholder}
        customCss={customCss}
        handleChange={handleInputChange}
        handleFocus={() => setShowSuggestions(filteredSuggestions.length > 0)}
        handleBlur={() => setShowSuggestions(false)}
        handleKeyDown={handleKeyDown}
        value={inputValue}
      />
      {showSuggestions && (
        <ul
          role="listbox"
          aria-label="Suggestions"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxHeight: "150px",
            overflowY: "auto",
            padding: "0",
            margin: "0",
            listStyleType: "none",
          }}
        >
          {
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={`${suggestion.id}-${suggestion.name}-${suggestion.genre}`}
                onMouseDown={(e) => {
                  console.log("cliclou na sugestão, ", suggestion)
                  handleSuggestionClick(suggestion.name)
                }}
                onMouseEnter={() => setActiveSuggestionIndex(index)}
                onMouseLeave={() => setActiveSuggestionIndex(-1)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor:
                    index === activeSuggestionIndex ? "#e2e2e2" : "#fff",
                }}
                role="option"
                aria-selected={index === activeSuggestionIndex}
              >
                {suggestion.name}
              </li>
            ))
          }
        </ul >
      )
      }
    </div >
  );
};

export default Autocomplete;
