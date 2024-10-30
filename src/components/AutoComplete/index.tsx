import React, { useState, useEffect, useRef, useCallback } from "react";
import TextInput from "components/TextInput";
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
  defaultValue: string | null;
  handleChange?: (input: string, suggestions: ICSVPokemon[]) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  suggestions,
  customCss,
  defaultValue,
  handleChange
}) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue || "");
  const [filteredSuggestions, setFilteredSuggestions] = useState<ICSVPokemon[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(-1);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0, 19);
    setFilteredSuggestions(filtered);

    // Só mostrar o dropdown se estiver em foco e houver sugestões
    setShowSuggestions(isFocused && filtered.length > 0 && inputValue.length > 0);
    handleChange && handleChange(inputValue, filtered);
  }, [inputValue, suggestions, isFocused]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveSuggestionIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      handleSuggestionClick(filteredSuggestions[activeSuggestionIndex].name);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  // Função para detectar cliques fora do componente
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setShowSuggestions(false);
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <TextInput
        placeholder={placeholder}
        customCss={customCss}
        handleChange={handleInputChange}
        handleFocus={() => setIsFocused(true)}
        handleBlur={() => setIsFocused(false)}
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
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={`${suggestion.id}-${suggestion.name}-${suggestion.genre}`}
              onMouseDown={() => handleSuggestionClick(suggestion.name)}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: index === activeSuggestionIndex ? "#e2e2e2" : "#fff",
              }}
              role="option"
              aria-selected={index === activeSuggestionIndex}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
