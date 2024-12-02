

import imgE404 from '../../assets/erreur404_1.webp';

function E404() {

  return (
    <section className="e404">
    

      <div className='e404-img'>
          <img src={imgE404} alt="Page introuvable" />
      </div>
      <div className="e404-title">
        <h2>Page Introuvable !</h2>
      </div>
     
    
   
    </section>
  );
}

export default E404;