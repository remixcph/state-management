import { Navigation, Page, SubTitle, Title } from "~/components";

export default function Session() {
  return (
    <Page dark={false}>
      <Title>where is my state? 🤔</Title>

      <div className="my-8 flex flex-col gap-2">
        <SubTitle>this talk is about</SubTitle>

        <ul className="ml-4 list-disc">
          <li>state management</li>
          <li>local state vs remote state</li>
          <li>React vs Remix</li>
          <li>data persistance</li>
        </ul>
      </div>

      <SubTitle className="text-red-500">
        this talk is not about themes 😔
      </SubTitle>

      <Navigation back="/whoami" forward="/local-state" />
    </Page>
  );
}
