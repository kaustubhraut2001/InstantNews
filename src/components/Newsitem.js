import React, { Component } from "react";
import NavBaritem from "./NavBaritem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class Newsitem extends Component {
  static defaultProps = {
    Country : 'in',
    PageSize: 5,
    category : 'general'
  }
  static propType = {
    Country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading : false,
      page : 1,
      totalResults:0,

    };
    document.title = `${this.props.category} | NewsApp`;
  }
  async updatepage(){
    this.props.setProgress(10);


    let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apikey=125af8788f724e5ba688d7f4e378ca4b&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    this.setState({loading:true})
    // this.state.loading = true;
    let data =  await fetch(Url);
    let parsdata = await data.json();
    this.props.setProgress(50);
    this.setState({articles:parsdata.articles ,
      totalResults : parsdata.totalResults,
      loading:false,

    });
    this.props.setProgress(100);

  }

   async componentDidMount(){
    // let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apikey=125af8788f724e5ba688d7f4e378ca4b&page=1&pageSize=${this.props.PageSize}`;
    // this.setState({loading:true})
    // // this.state.loading = true;
    // let data =  await fetch(Url);
    // let parsdata = await data.json();
    // this.setState({articles:parsdata.articles ,
    //   totalResults : parsdata.totalResults,
    //   loading:false
    // });
    this.updatepage();

  }
  previousclivk= async () =>{
    // console.log("kmdk");
    // let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apikey=125af8788f724e5ba688d7f4e378ca4b&page=${this.state.page-1}&pageSize=${this.props.PageSize}`;
    // this.setState({loading:true})
    // let data =  await fetch(Url);
    // let parsdata = await data.json();



    this.setState({
       page : this.state.page-1,
      // articles:parsdata.articles,
       loading:false

    })
    this.updatepage();

 }
 nectclick= async()=>{
   console.log("ehy");
  //  if(Math.ceil( this.state.page +1   > this.state.totalResults / 20)){

  //  }
  //  else{
  // let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apikey=125af8788f724e5ba688d7f4e378ca4b&page=${this.state.page+1}&pageSize=${this.props.PageSize}`;
  // this.setState({loading:true})
  // let data =  await fetch(Url);
  // let parsdata = await data.json();


  this.setState({
    page : this.state.page+1,
    // articles:parsdata.articles,
     loading:false

  })
  this.updatepage();

}
fetchMoreData = async() => {

  let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apikey=125af8788f724e5ba688d7f4e378ca4b&page=${this.state.page+1}&pageSize=${this.props.PageSize}`;
    // this.setState({loading:true})
    // this.state.loading = true;

    this.setState({
      page : this.page+1
    })
    let data =  await fetch(Url);
    let parsdata = await data.json();
    this.setState({
      articles: this.state.articles.concat( parsdata.articles) ,
      totalResults : parsdata.totalResults,
      // loading:false,

    });

};
  render() {
    return (
<>
      <div>
         {/* <Spinner/> */}
        <div className="container my-3">
          <h2>News top head Lines</h2>
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.state.articles.length !== this.state.totalResults}
          hasMore={true}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
          { this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                {/* <div className="col md-3 "> */}
                  <NavBaritem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    update={element.publishedAt}
                  />
                {/* </div> */}

                {/* <div className="col md-4">
                  <NavBaritem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
                <div className="col md-4">
                  <NavBaritem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div> */}

              </div>

          })}
          </div>
          </div>
          </InfiniteScroll>
        {/* </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.previousclivk} >&larr;previous</button>
        <button disabled={ this.state.page +1 > Math.ceil(this.state.totalResults / this.props.PageSize)}  type="button" className="btn btn-dark" onClick={this.nectclick}>next&rarr;</button>
        </div> */}
      </div>
      </div>
      </>
    );
  }
}
