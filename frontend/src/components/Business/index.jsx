import React, { useEffect, useState } from 'react';
import Loader from 'react-loading';
import { useParams } from 'react-router-dom';
import { fetch } from '../../store/csrf';

// Scoped styles
import './styles.css';

const Business = () => {
  const { id: businessId } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [state, setState] = useState({});

  useEffect(async () => {
    const res = await fetch(`/api/businesses/${businessId}`);
    if (res.ok) {
      setIsLoaded(true);
      setState(res.data.data);
    }
  }, []);

  return (
    <div className="business-view">
      {isLoaded ?
        <div className="business-view__loaded">
          <div className="business-view__section-a">
            <h1>{state.name}</h1>
            <span className='category'>{state.category && state.category.name}</span>
          </div>
          <div className="business-view__section-b">
            <h3>About</h3>
            <span className='established'>Established {new Date(state.establishedAt).toDateString()}</span>
            <div className='tags'>{state.tags && state.tags.map(tag => {
              return (
                <div key={`business-view-tag-${tag.name}`}>{tag.name}</div>
              )
            })}</div>
            <p>{state.description}</p>
          </div>
          <div className="business-view__section-c">
            <h3>Reviews</h3>
          </div>
        </div> :
        <div className="business-view__awaiting">
          <Loader type={'bubbles'} color={'#bbbbbb'} height={128} width={128} />
        </div>
      }
    </div>
  )
}

export default Business;
