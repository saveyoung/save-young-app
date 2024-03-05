import Navigation from "../navigation";
import Footer from "../footer";
import ResourceRecord from "./resourceRecord";
import Link from "next/link";

export default function resources() {
    return (
        <main>
            <Navigation/>
            <div className="page">
                <div className="quickContact">
                    <h1 className="sectionHeader">Keeping contacts handy!</h1>
                    <p className="sectionText">Important Hotline numbers to call for quick assistance can be life saving. Here is the information about Local authorities, National authorities and NGO’s near you!</p>
                    <Link href="https://www.google.com/search?q=police+station+near+me" className="contactLink">Local Authorities</Link>
                    <Link href="https://humantraffickinghotline.org/en/contact" className="contactLink">National Hotlines</Link>
                    <Link href="https://www.google.com/search?q=ngo+near+me" className="contactLink">NGO's near you</Link>
                </div>
                <div className="resourceSection">
                    <h1 className="sectionHeader">Know more, protect more</h1>
                    <div className="resourceContainer">
                        <Link href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/social-media-risks-tips-to-keep-your-children-safe">
                            <ResourceRecord
                                img='/images/socialMediaRisks.jpeg'
                                imgAlt="Picture of teens on their phones."
                                description="Social media risks: Safeguarding children&apos;s online experience"
                                source="Mayo Clinic Health System"
                            />
                        </Link>
                        <Link href="https://www.pbs.org/newshour/show/the-dangers-of-parents-sharing-their-childrens-lives-on-social-media">
                            <ResourceRecord
                                img='/images/kidsAsInfluencers.png'
                                imgAlt="Picture of teens posing for a photo."
                                description="The dangers of parents sharing their children&apos;s lives on social media"
                                source="PBS"
                            />
                        </Link>
                        <Link href="https://www.ed.gov/human-trafficking">
                            <ResourceRecord
                                img='/images/childrenAtSchool.png'
                                imgAlt="Picture of teens on their phones."
                                description="Combatting Human Trafficking in America&apos;s Schools"
                                source='U.S. Department of Education'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <Footer/>
        </main>  
    );
}