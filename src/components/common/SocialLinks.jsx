function SocialLinks({ socials }) {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          className="social-link"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
