import React, { useEffect } from 'react';

function Members() {
    useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://www.instagram.com/embed.js');
        script.setAttribute('async', '');
        script.onload = () => {
            window.instgrm?.Embeds.process();
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const reels = [
        "https://www.instagram.com/reel/DIq6DPwNdvJ/?utm_source=ig_embed",
        "https://www.instagram.com/reel/DJUzi5tqUIB/?utm_source=ig_embed",
        "https://www.instagram.com/reel/DIttsc3tMKn/?utm_source=ig_embed", // replace with actual reel
        "https://www.instagram.com/reel/DIjlzyyNLIg/", // replace with actual reel
    ];

    return (
        <section className="relative  overflow-hidden py-12 sm:py-16 lg:py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-32">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold leading-10 text-white tracking-widest sm:text-4xl xl:text-6xl">
                        Our  <span className="text-red-500">Members</span>
                    </h1>
                </div>

                <div className="grid pt-8  grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
                    {reels.map((url, index) => (
                        <div key={index} className="w-full max-w-md overflow-hidden rounded-lg shadow-lg p-4">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={url}
                                data-instgrm-version="14"
                                style={{
                                    background: '#000',
                                    border: 0,
                                    borderRadius: 8,
                                    margin: '0 auto',
                                    maxWidth: '100%',
                                    width: '100%',
                                }}
                            ></blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Members;
