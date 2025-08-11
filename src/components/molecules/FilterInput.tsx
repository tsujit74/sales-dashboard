interface Props {
  threshold: number;
  onChange: (val: number) => void;
}
export default function FilterInput({ threshold, onChange }: Props) {
  return (
    <input
      type="number"
      value={threshold}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Filter sales >"
      className="border px-3 py-2 rounded w-full mb-4"
    />
  );
}