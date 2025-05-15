import InfoCard from "../card/InfoCard";

export default function InfoList({data, gridStyle}){
    return (
        <div style={gridStyle}>
            {data.map((dataElem, idx) => <InfoCard key={idx} info={dataElem}/>)}
        </div>
    );
}
