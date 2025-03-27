import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { NasaImageContainer, NasaButton } from "../../components/NASA/ImageStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";


export default function photo({photo}){
    const router = useRouter();
    if(!router.isFallback && !photo){
        return <div>ERROR 404 Page Not Found</div>
    }
    return (
        <Section style={{textAlign: 'center'}}>
            <SectionTitle>Straight from Nasa.</SectionTitle>
            <NasaImageContainer>
                {router.isFallback ? (
                    <div>...loading</div>
                ) : (
                    <>
                    <Image width={960} priority height={540} src={photo} />
                    </>
                )}
            </NasaImageContainer>
            <NasaImageContainer>
                <Link href='/aboutme'>
                    <a>
                        <NasaButton style={{width: 'max-content'}}>Go Back</NasaButton>
                    </a>
                </Link>
            </NasaImageContainer>
        </Section>
    )
}

export async function getStaticProps({params}){
    const nasa_id = params.id;
    const results = await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`);
    const previews = await results.json();
    const photo = await previews.collection.items[0].href;
    return {
        props: {photo},
    };
}

export async function getStaticPaths(){
    const results = await fetch(
        "https://images-api.nasa.gov/search?media_type=image"
        );
    const preview = await results.json();
    const items = await preview.collection.items;
    return{
        paths: 
        items?.map((nasa) => ({
            params: {
                id: nasa.data[0].nasa_id,
            }
        })) || [],
        fallback: true
    };
}