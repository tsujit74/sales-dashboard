export default function Heading({ text }: { text: string }) {
  return (
    <h1 className="text-3xl font-bold text-center my-8 text-red-600">
      {text}
    </h1>
  );
}
