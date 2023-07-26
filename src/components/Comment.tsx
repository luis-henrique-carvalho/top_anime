import React from "react";

type Props = {
  userName: string;
  comment: string;
  image: string;
};

const Comment = ({ userName, comment, image }: Props) => {
  return (
    <div className="text-anime-white flex flex-row gap-4">
      <div className="rounded-full min-w-max flex items-center">
        <img
          src={image}
          alt={image}
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-xs font-medium mb-1">{userName}</h4>
        <p className="text-anime-gray text-xs font-normal line-clamp-3">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
