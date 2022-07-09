import RickRollVideo from '../../images/Rick-Roll.mp4';
export default function RickRoll({ os }) {
    let OSisWindows = false;
    if (os === 'Windows') {
        OSisWindows = true;
    }
    return (
        <>
            {OSisWindows ? <video width="100%" height="100%" loop autoPlay playsInline>
                <source src={RickRollVideo} type="video/mp4" />
                Upgrade your browser &gt;:[
            </video> : <video width="100%" height="100%" loop autoPlay playsInline muted>
            <source src={RickRollVideo} type="video/mp4" />
            Upgrade your browser &gt;:[
            </video>}
        </>
    )
}