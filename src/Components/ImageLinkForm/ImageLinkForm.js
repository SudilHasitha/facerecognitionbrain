import React from 'react';


const ImageLinkFormImageLinkForm = ({onInputChange,onSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'Face Detection API demo'}
            </p>
            <div style={{width:700}} className='center'>
                <div  className='pa4 br3 shadow-5'>
                 <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                 <button className='w-30 grow f4 link ph3 pv2 dib Black bg-light-green'
                         onClick={onSubmit}> Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkFormImageLinkForm;