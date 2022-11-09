import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState, type ReactNode } from "react";
import { FaArtstation, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Harith Portfolio</title>
                <meta
                    name="description"
                    content="Welcome to Harith Aiman's Portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="flex flex-col items-center gap-2">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col-reverse sm:gap-6 lg:flex-row">
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-2xl font-semibold text-primary">
                                Harith Aiman Ridzuwan
                            </h1>
                            <span className="text-md text-center font-normal">
                                <Typewriter
                                    words={[
                                        "3D Artist",
                                        "3D Animator",
                                        "Bedroom Animator",
                                    ]}
                                    loop={false}
                                    cursor
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <div className="badge-success badge badge-sm">
                                open to work
                            </div>
                            <div className="flex gap-2">
                                <a href="https://www.artstation.com/laminatedsquid">
                                    <FaArtstation className="text-xl hover:text-primary" />
                                </a>
                                <a href="https://www.instagram.com/laminated_squid">
                                    <FaInstagram className="text-xl hover:text-primary" />
                                </a>
                                <a href="https://www.linkedin.com/in/harith-aiman-ridzuwan-3232451bb/">
                                    <FaLinkedin className="text-xl hover:text-primary" />
                                </a>
                                <a href="mailto:harithaimanrid@gmail.com">
                                    <AiOutlineMail className="text-xl hover:text-primary" />
                                </a>
                            </div>
                        </div>
                        <Image
                            src={"/resources/aiman_img.jpg"}
                            alt="Avatar"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="flex w-11/12 flex-col items-center gap-2 sm:w-1/2">
                    <Card title="Summary">
                        <p className="text-md">
                            Animation and Visual Effects Fresh Grad. I do 3D
                            animation and 3D modelling. I also like ducks and
                            cats.
                        </p>
                    </Card>
                    <Card title="Skills">
                        <ul className="list-inside list-disc">
                            <li>Autodesk Maya</li>
                            <li>Substance 3D Painter</li>
                        </ul>
                    </Card>
                    <Card title="ArtStation">
                        <Post />
                    </Card>
                </div>
            </div>

            <div className="mt-5 bg-base-100 py-5 text-center">
                <h1 className="text-sm font-thin">
                    Created by one and only,{" "}
                    <span className="text-blue-400 underline decoration-wavy">
                        <a href="https://nightmunch.com">nightmunch</a>
                    </span>
                </h1>
                <h1 className="pt-3">
                    Made With{" "}
                    <a href="https://nextjs.org/">
                        <TbBrandNextjs className="inline text-2xl" />
                    </a>
                </h1>
            </div>
        </>
    );
};

export default Home;

const Card = ({ title, children }: { title: string; children?: ReactNode }) => {
    return (
        <div className="card w-full bg-base-100 shadow-md">
            <div className="card-body">
                <h2 className="text-xl font-semibold text-primary">{title}</h2>
                {children}
            </div>
        </div>
    );
};

async function fetchPost() {
    const { data } = await axios.get("/api/artstation");
    return data;
}

function Post() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [posts, setPosts] = useState<any>();
    useEffect(() => {
        fetchPost().then((it) => setPosts(it));
    }, []);
    return (
        <>
            {posts ? (
                <div className="grid grid-cols-2 items-center gap-y-3 overflow-hidden pt-2 sm:grid-cols-4">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {posts.map((post: any) => (
                        <a
                            key={post.id}
                            className="group relative mx-auto h-[130px] w-[130px] overflow-clip rounded"
                            href={post.url}
                        >
                            <Image
                                src={post.smaller_square_cover_url}
                                alt={post.title}
                                fill
                                objectFit="cover"
                                className="group-hover:opacity-50"
                            />
                        </a>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
