const BlogCard = ({ blog }) => {
  const { title, description, category, author, date, image } = blog;

  return (
    <div className="card bg-base-100 border border-base-300 shadow hover:shadow-lg transition-all duration-300 rounded overflow-hidden">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <span className="badge badge-secondary badge-outline w-fit">
          {category}
        </span>

        <h2 className="card-title text-accent">{title}</h2>

        <p className="text-sm text-accent-content">
          {description}
        </p>

        <div className="flex items-center justify-between mt-4 text-sm text-accent-content">
          <span>✍ {author}</span>
          <span>{date}</span>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
