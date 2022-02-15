import Transition from "../components/Transition";
import TrailingPointerCircle from "../components/TrailingPointerCircle";

export default function Test() {
  return (
    <>
      <div style={{width: "100vw", height: "100vh", background: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/washington.jpg')" }}>
        <TrailingPointerCircle />
        <h1>Yo!</h1>
        <Transition loading={true} />
      </div>
    </>
  );
}
