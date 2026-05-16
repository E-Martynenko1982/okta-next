import { FaYoutube, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      id: 1,
      href: "https://www.youtube.com/channel/UCzwVJyi1dtLRF99sn9TbguA",
      icon: <FaYoutube size={20} />,
      label: "YouTube",
    },
    {
      id: 2,
      href: "https://www.facebook.com/okta.ltd",
      icon: <FaFacebookF size={18} />,
      label: "Facebook",
    },
    {
      id: 3,
      href: "https://www.instagram.com/okta.ua/",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
    {
      id: 4,
      href: "https://www.pinterest.com/okta_ua/",
      icon: <FaPinterestP size={20} />,
      label: "Pinterest",
    },
  ];

  return (
    <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-200 text-gray-400 hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
