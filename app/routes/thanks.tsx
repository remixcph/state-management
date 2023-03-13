import { Page, Title } from "~/components";

export default function Thankyou() {
  return (
    <Page dark={false}>
      <div className="mt-8 w-1/2">
        <img
          className="h-full w-full rounded-md"
          src="https://media.giphy.com/media/gtzIP3mpbzh16/giphy.gif"
          alt="thank you"
        />
      </div>

      <Title>thank you 🙏</Title>
    </Page>
  );
}
