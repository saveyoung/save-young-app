import Image from "next/image";

type ResourceRecordProps = {
    img: string;
    imgAlt: string;
    description: string;
    source: string;
  };

export default function resourceRecord({img, imgAlt, description, source}: ResourceRecordProps) {
    return (
        <div>
            <div className="resourceLink">
                <Image src={img}
                    width={104}
                    height={78}
                    alt={imgAlt}
                    className="resourceImg"
                />
                <div className="resourceDescription">
                    <p>{description}</p>
                    <div className="resourceSource">
                        <p>Source: {source}</p>
                    </div>
                </div>
            </div>
            <hr className="resourceDivider"/>
        </div>
    )
}