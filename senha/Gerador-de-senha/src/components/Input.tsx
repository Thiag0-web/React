import type { PasswordSize } from './gerador';


export function Input({ passwordSize, setPasswordSize }: PasswordSize) {
  return (
    <input
      type="number"
      id="passwordSize"
      min={1}
      value={passwordSize}
      onChange={(ev) => setPasswordSize(parseInt(ev.target.value))}
    />
  );
}
