import Card from "@/app/component/Card";
import fetchData from "../lib/dbconnect";


export default async function Home() {
  const dataSoal = await fetchData()
  return (
    <div id="cardContainer" className="px-10">
      <Card title={'Paket 1'} href={'/Paket1'} text={
        <div className="text-[#00000093]">
        Simulasi SKD-CAT
        </div>
      } />    </div>
  );
}
