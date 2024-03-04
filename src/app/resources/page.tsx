import Navigation from "../navigation";
import Footer from "../footer";
import ResourceRecord from "./resourceRecord";

export default function resources() {
    return (
        <main>
            <Navigation/>
            <div>
                <div className="quickContact">
                    <h1 className="sectionHeader">Keeping contacts handy!</h1>
                    <p className="sectionText">Important Hotline numbers to call for quick assistance can be life saving. Here is the information about Local authorities, National authorities and NGO’s near you!</p>
                </div>
                <div className="resourceSection">
                    <h1 className="sectionHeader">Know more, protect more</h1>
                    <div className="resourceContainer">
                        <ResourceRecord
                            img=''
                            description='Understanding digital risks in the era of social media'
                        />
                        <ResourceRecord
                            img=''
                            description='Kids influencers- the good and the bad side of kids on social media'
                        />
                        <ResourceRecord
                            img=''
                            description='2023 reports on Child safety in schools and public places'
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </main>  
    );
}