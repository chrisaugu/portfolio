import React from "react";
import Link from "next/link";
import NextImage from "../Image";

export const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase text-gray-50">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large text-gray-50">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};