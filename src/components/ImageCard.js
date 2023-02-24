import react from "react";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return(
        <div className="pt-10 max-w-xs rounded shadow-lg overflow-hidden">
        <img src={image.webformatURL} alt="" className="w-full"></img>
        <div className="px-6 py-4">
          <div className="text-purple-500 font-semibold mb-2 text-lg">
            photo by {image.user}
          </div>
          <ul className="text-gray-700">
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4 flex-auto">
          {tags.map(( tag, index ) =>(
              <span key={index} className="inline-block rounded-full bg-gray-200 text-gray-700 
              font-semibold text-sm px-3 py-2 mr-5">
                #{tag}
              </span>
          ))}
        </div>
  
       
      </div>
    );

}

export default ImageCard;