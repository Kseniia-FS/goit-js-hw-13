import Notiflix from 'notiflix';

function getMessage (total){
    Notiflix.Notify.success(`"Hooray! We found ${total} images."`);
}

function getErrorMessage (){
    Notiflix.Notify.failure('Oops, there is no matches withthat name');
}

export {
    getMessage, getErrorMessage
}