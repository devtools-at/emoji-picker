/**
 * Emoji Picker
 * Browse and copy emojis
 *
 * Online tool: https://devtools.at/tools/emoji-picker
 *
 * @packageDocumentation
 */

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Export for convenience
export default { encode, decode };
