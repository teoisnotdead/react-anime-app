import Socials from "./Socials";

const Footer = () => {
    const socials = [
        {
            name: 'Twitter',
            url: 'https://twitter.com/teoisnotdead',
            skillIcon: 'twitter',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/teoisnotdead',
            skillIcon: 'instagram',
        },
        {
            name: 'LinkedIn',
            url: 'www.linkedin.com/in/salvador-saavedra',
            skillIcon: 'linkedin',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/teoisnotdead',
            skillIcon: 'github',
        },
    ];

    return (
        <footer className="container min-w-full bg-gray-900 text-center text-white py-2">
            <div className="flex justify-center gap-5 p-2">
                {socials.map((social) => (
                    <Socials key={social.name} name={social.name} url={social.url} skillIcon={social.skillIcon} />
                ))}
            </div>
        </footer>
    );
};

export default Footer;