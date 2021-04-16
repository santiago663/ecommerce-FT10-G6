/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllCategories, getAllAuthors, getAllProducts} from '../../redux/actions/index'


function Filters({setCards}) {


    const dispatch = useDispatch();
    
    const [Num, setNum] = useState (0);


    const [artwork, setArtwork] = useState ([]);
    const [boleans, setBoleans] = useState (false);


    const categoryData = useSelector((store) => store.allCategoriesCache);
    const authorData = useSelector((store) => store.allArtistCache);
    const artworkData = useSelector((store) => store.artworkCache);
    

    useEffect(() => {
        if(categoryData.length === 0 || authorData.length === 0 || artworkData.length === 0){
            dispatch(getAllCategories());
            dispatch(getAllAuthors());
            dispatch(getAllProducts());
        }
    }, []);

    const artworksProd = () =>{

        if(Num !== 5){
            setNum(5)
        }
        if(Num === 5){
            setNum(6)
        }
    }

    useEffect(() => {
            
        setCards([])
        if(Num === 5){
        
            let val = artworkData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
            setArtwork(val)
            setBoleans(true)
        }
        else if(Num === 6){
            
            let val = artworkData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1); 
            setArtwork(val)
            setBoleans(true)
        }
    
    }, [Num]);

    if(boleans === true){
        setCards(artwork)
        setBoleans(false)
    }
  
    let filterCategory = [];
    let filterAuthors = [];

    const handleInputChangeAuthors = (e)=>{
        e.preventDefault();

        filterAuthors = artworkData.filter(f => f.author.id == e.target.value)
        if(filterAuthors !==0){
            setCards(filterAuthors)
            filterAuthors=[]
        }
    }
    const handleInputChangeCategories = (e)=>{
        e.preventDefault();
  
        filterCategory = artworkData.filter( f => f.categories.find(c => c.id == e.target.value))

        if(filterCategory !==0){
            setCards(filterCategory)
            filterCategory=[]
        }
    }

    return(
        <div>

            <div>
                <h4>OrdenAlfabetico</h4>
                <button 
                    type="button"
                    onClick={artworksProd}
                >{Num ===5?"A-Z":"Z-A"}</button> 
            </div>

            <div>
                <h4>Categories</h4>
                <select onChange={handleInputChangeCategories}>
                    {categoryData.length !==0 && categoryData.map((c) =>{
                        return(<option 
                                    value={c.id} 
                                    key={c.id}
                                >{c.name}</option>
                        )
                })}
                </select>  
            </div>
            <div>
                <h4>Authors</h4>
                 <select onChange={handleInputChangeAuthors}>
                    {authorData.length !==0 && authorData.map((c) =>{
                        return(<option value={c.id} key={c.id}>{c.name}</option>)
                    })}
                </select>
            </div>
        </div>
    )
}
export default Filters;