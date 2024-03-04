type ResourceRecordProps = {
    img: string;
    description: string;
  };

export default function resourceRecord({img, description}: ResourceRecordProps) {
    return (
        <div>
            <div className="resourceLink">
                <div className="resourceImg">
                    {img}
                </div>
                <div className="resourceDescription">
                    <p>{description}</p>
                </div>
            </div>
            <hr className="resourceDivider"/>
        </div>
    )
}