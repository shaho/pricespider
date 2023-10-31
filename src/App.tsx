import { DefaultLayout } from "./layout";
import { CitiesList } from "./components/cities-list";

export default function App() {
  return (
    <DefaultLayout>
      <CitiesList />
    </DefaultLayout>
  );
}
