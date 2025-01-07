import "./init";
import {images} from "../data/images";
// Kullanılacak kısmın import edilmesi
// const simplelightbox = require('simplelightbox');
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector(".gallery");

const galleryMarkUp = images.map(
    ({preview, original, description}) => 
    `
    <li class="gallery-item">
	<a class="gallery-link" href="${cropStringLetters(original)}">
		<img 
			class="gallery-image" 
			src="${cropStringLetters(preview)}" 
			alt="${description}" 
			/>
	</a>
</li>
`
).join("");

galleryContainer.innerHTML = galleryMarkUp;

new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionDelay: 250
    }
);

function cropStringLetters(str) {
    return str.substring(1, str.length - 1);
  }