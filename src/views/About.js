import React, { Component } from 'react';

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../static/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row mt-5 justify-content-center align-self-center">
            <div className="col mt-5 text-center about-title">
              Nice to meet you
            </div>
          </div>
          <div className="row mx-2 mt-3 mb-5 justify-content-center align-self-center">
            <div className="col-12 col-lg-10">
              <div className="card-deck text-center">
                <div className="card border-0 shadow about-card m-2">
                  <img src={`/images/man.png`} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Zexi Han</h5>
                    <div className="card-text text-black-50">
                      Web Developer
                    </div>
                    <div className="card-text text-black-50">
                      Data Scientist
                    </div>
                    <hr className="about-hr" />
                    <div className="card-text email">
                      zexihan@outlook.com
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow about-card m-2">
                  <img src={`/images/boy.png`} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Rui Wang</h5>
                    <div className="card-text text-black-50">
                      Data Scientist
                    </div>
                    <hr className="about-hr" />
                    <div className="card-text email">
                      raywcoke@gmail.com
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow about-card m-2">
                  <img src={`/images/woman.png`} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Wenyi Jin</h5>
                    <div className="card-text text-black-50">
                      Data Scientist
                    </div>
                    <hr className="about-hr" />
                    <div className="card-text email">
                      admail1121@gmail.com
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow about-card m-2">
                  <img src={`/images/girl.png`} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Qinyu Chen</h5>
                    <div className="card-text text-black-50">
                      UX/UI Designer
                    </div>
                    <div className="card-text text-black-50">
                      Data Scientist
                    </div>
                    <hr className="about-hr" />
                    <div className="card-text email">
                      chenqinyuu@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-3 justify-content-center align-self-center">
            <div className="col text-center about-title">
              About trip
              <span style={{ color: "#cc0041" }}>elf</span>
            </div>
          </div>
          <div className="row mt-3 mb-5 justify-content-center align-self-center">
            <div className="col-12 col-md-10 col-lg-9">
              <div className="accordion" id="accordionExample">
                {/* section 1 */}
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-block btn-link about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        1 Motivation
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        For people who are planning a trip, a good
                        accommodation is one of the most important concerns
                        that influence the experience of traveling. When it
                        comes to booking a place for a short-term stay, we
                        used to book hotels, motels or resorts. But with the
                        emergence of Airbnb and other accommodation service
                        providers, we have more choices than ever before.
                      </p>
                      <p>
                        Airbnb, Inc. operates an online community
                        marketplace for people to list, discover, and book
                        accommodations worldwide online or from a mobile
                        phone to individuals and businesses. It allows its
                        users to share their travel experiences. The company
                        allows people to rent out their extra space and
                        showcase it to audience [1]. Airbnb features a
                        review system in which guests and hosts can rate
                        each other after a stay. Hosts and guests are unable
                        to see reviews until both have submitted a review or
                        until the window to review has closed, a system
                        which aims to improve accuracy and objectivity by
                        removing fears that users will receive a negative
                        review in retaliation if they write one [2].{" "}
                      </p>
                      <p>
                        The reviews giving to the hosts usually contains
                        truthful and impartial information about the guests’
                        living experience. We find that such reviews are not
                        only about the home and the guest, but also about
                        the neighborhood. Take the following review for
                        example,
                      </p>
                      <p>
                        <i>
                          “Dana was really helpful. The apartment is in a
                          great spot. its nice and clean. Good access to the
                          metro stations and a bus route passes the door on
                          route to/from downtown to Haarlem. Central park 1
                          minutes walk away and a good drinkers bar around
                          the corner (called ding dong) and one of the best
                          breakfast deli place 2/3 mins by foot called
                          Zanny's. Great place for a long week end.”
                        </i>
                      </p>
                      <p>
                        We see that the guest had a pretty positive comment
                        on the neighborhood’s location, convenient access to
                        transits, restaurants, and bars. As the old saying
                        goes, it's all about “location, location, location”.
                        Before searching for a certain type of
                        accommodation, we have to pick a location, or say,
                        neighborhood. Neighborhood could affect our
                        traveling experience in many ways. Nice people and
                        beautiful scenes, or noisy traffic and messy
                        streets? It is all about a choice of neighborhood.
                      </p>
                      <p>
                        TripElf, an interactive-map web application, is thus
                        developed to provide users with intuitive knowledge
                        about the neighborhoods by demonstrating the
                        machine-generated overviews of the neighborhoods,
                        based on publicly available Airbnb listing reviews
                        that contains travelers’ truthful living experiences
                        about neighborhoods. Compared to similar travel apps
                        such as TripAdvisor or StreetAdvisor, TripElf
                        doesn’t show embellished overviews or a surfeit of
                        (often conflicting) user comments that often create
                        cacophony and confusion, instead we present text
                        overviews summarized by statistical text models to
                        preserve the maximum level of truthfulness,
                        cleanness, and readability.{" "}
                      </p>
                      <p>
                        To show a vivid picture of NYC neighborhoods to the
                        users, we develop a react web app written with
                        modern JavaScript in tandem with d3.js for data
                        visualization, which enables users to interact with
                        a map-based interface with ease.
                      </p>
                    </div>
                  </div>
                </div>

                {/* section 2 */}
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        2 Data
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h4>Airbnb Reviews</h4>
                      <p>
                        Inside Airbnb [3] collects publicly available
                        information about a city's Airbnb's listings,
                        calendar, reviews, and neighborhood, which allows us
                        to explore how Airbnb is really being used around
                        the world. It also provides an interactive map
                        demonstrating those statistics. For our project,
                        reviews dataset stored in CSV format is used. There
                        are millions of review records from 83 major cities
                        in the world. Due to our limit time and
                        understanding of languages, the project is only
                        based on New York City for now. Each record of
                        reviews data contains attributes describing
                        properties including listing id, id, date, reviewer
                        id, reviewer name, and comments. The dataset used by
                        us wais compiled on 05 December 2018.
                      </p>
                      <h4>Entertaiment</h4>
                      <p>
                        For the entertainment part of the data, we scraped
                        restaurants, shopping, nightlife business listings
                        from Yelp. The scraping was not an easy job. Due to
                        the rate limiting and variation of pagination of
                        Yelp, we had to write robust scraping programs to
                        keep extracting business listings without
                        supervising. Beautiful Soup library was used for
                        data extraction from DOM and dynamic proxy ip list
                        was used to break the access limiting. In the end,
                        we got 25068 restaurants, 14950 shopping, and 5169
                        nightlife businesses in total. 15 attributes were
                        collected, including:
                      </p>
                      <p>
                        Datatype and Example: <br />
                        Categorical: business id, title, categories, price
                        range, address, neighborhood, neighborhood group,
                        zipcode, phone, and image url <br />
                        Quantitative: dollar price, rating, review count,
                        latitude, longitude <br />
                        Example: amy-ruths-new-york,Amy Ruth’s,Southern;Soul
                        Food,$11-30,$$,4,2372,113 W 116th
                        St,Harlem,Manhattan,10026,40.8025539,-73.9502679,,https://s3-media3.fl.yelpcdn.com/bphoto/aX-TMDOSS2vO-0L47FoZ0Q/ls.jpg
                      </p>
                      <h4>Noise</h4>
                      <p>
                        We applied 2015 New York City Crimes reported in all
                        5 boroughs to analyze the safety in each
                        neighborhood. The data set is published by New York
                        City agencies and other partners on NYC Open Data.
                        It is easy to download the data set in CSV form from
                        the website and filter out the incident reported in
                        2015 but it takes time to add a categorical variable
                        neighborhood according to the longitude and latitude
                        provided in the original data set. Then, we
                        aggregated the original dataset to the neighborhood
                        level and count the number the noise incident
                        reports and density in each neighborhood for our
                        website.
                      </p>
                      <p>
                        Datatype and Example: <br />
                        Categorical: Unique Key, Created Date, Closed Date,
                        Agency, Agency Name, Complaint Type, Descriptor,
                        Location Type, Incident Zip, Incident Address,
                        Street Name, Cross Street 1, Cross Street 2,
                        Intersection Street 1, Intersection Street 2,
                        Address Type, City, Landmark, Facility Type, Status,
                        Due Date, Resolution Action Updated Date, Community
                        Board, Borough, Park Facility Name, Park Borough,
                        Vehicle Type, Taxi Company Borough, Taxi Pick Up
                        Location, Bridge Highway Name, Bridge Highway
                        Direction, Road Ramp, Bridge Highway Segment,
                        Location
                        <br />
                        Quantitative: X Coordinate (State Plane), Y
                        Coordinate (State Plane), Latitude, Longitude
                        <br />
                        Example: 32218591, 12/16/15, 12/18/15, DEP
                        Department of Environmental Protection, Noise,
                        Noise: air condition/ventilation equipment (NV1),
                        11204, 7000 BAY PARKWAY, BAY PARKWAY, 70 ST, 71 ST,
                        ADDRESS, BROOKLYN, N/A, Closed, 12/18/15 14:00, 11
                        BROOKLYN, BROOKLYN, 988,560, 161,854, Unspecified,
                        BROOKLYN, 40.61092718, -73.98447693,
                        (40.61092717571984, -73.98447693156508)
                      </p>
                      <h4>Safety</h4>
                      <p>
                        The data we used to analyze noise level at New York
                        City is captured from 311 service request of all 5
                        boroughs in 2015. The data set is posted on Kaggle.
                        It is easy to download the data set in CSV form from
                        the website but it takes time to add a categorical
                        variable neighborhood according to the longitude and
                        latitude provided in the original data set. Then, we
                        aggregated the original dataset to the neighborhood
                        level and count the number of crimes as well as the
                        density in each neighborhood for our website.
                      </p>
                      <p>
                        Datatype and Example: <br />
                        Categorical: CMPLNT_NUM, CMPLNT_FR_DT, CMPLNT_FR_TM,
                        CMPLNT_TO_DT, CMPLNT_TO_TM, 'RPT_DT, KY_CD,
                        OFNS_DESC, PD_CD, PD_DESC, CRM_ATPT_CPTD_CD,
                        LAW_CAT_CD, JURIS_DESC, BORO_NM, LOC_OF_OCCUR_DESC,
                        PREM_TYP_DESC, PARKS_NM, HADEVELOPT <br />
                        Quantitative: ADDR_PCT_CD, X_COORD_CD, Y_COORD_CD,
                        Latitude, Longitude, Lat_Lon <br />
                        Example: 641637920, 12/31/15, 23:25:00, 12/31/15,
                        23:30:00, 12/31/15, 344 ASSAULT 3 & RELATED
                        OFFENSES, 101, ASSAULT 3, COMPLETED, MISDEMEANOR,
                        N.Y. POLICE DEPT ,MANHATTAN, 13 FRONT OF, OTHER,
                        987606, 208148, 40.7380024, -73.98789129,
                        (40.7380024, -73.98789129)
                      </p>
                      <h4>Transit</h4>
                      <p>
                        For analyzing the New York City transit condition,
                        we used the Bus Stop Shelters dataset and Subway
                        Entrance dataset downloaded from NYC Open Data. The
                        Bus Stop Shelters dataset is in CSV format which
                        contains the locations of bus stop shelters in NYC.
                        The Subway Entrance dataset is in CSV format which
                        contains the locations of subway entrances in NYC.
                        Aside from these two main datasets, we also used the
                        NYC Neighborhoods dataset downloaded from Inside
                        Airbnb. It is in GEOJSON format and will be used for
                        conducting spatial analysis to calculate the number
                        of bus stop shelters and subway entrances in each
                        neighborhood in New York City. The cleaning steps
                        include extracting longitude and latitude from
                        strings, building functions to assign points to
                        corresponding neighborhoods based on their
                        geolocation information.
                      </p>
                      <p>
                        Datatype and Example: <br />
                        Bus Stop Shelters Dataset: <br />
                        Categorical: the_geom，LOCATION，AT_BETWEEN，
                        Ordinal: SHELTER_ID，LONGITUDE， LATITUDE，Street
                        <br />
                        Example: POINT (-73.94783099999995
                        40.70681200000007), BR0003, MONTROSE AV, LORIMER ST,
                        -73.947831, 40.706812, MONTROSE AVENUE Subway
                        <br />
                        <br />
                        Entrance Dataset: <br />
                        Categorical: NAME, the_geom, LINE
                        <br />
                        Ordinal: OBJECTID <br />
                        Example: 1734, Birchall Ave & Sagamore St at NW
                        corner, POINT (-73.86835600032798
                        40.84916900104506), 2-5
                        <br />
                        <br />
                        NYC Neighborhood Dataset: <br />
                        Categorical: neighbourhood, neighbourhood_group,
                        geometry <br />
                        Example: Bayswater, Queens, (POLYGON
                        ((-73.76670799999999 40.614911,
                        -73.76670798237823799 40.614911)))
                      </p>
                      <h4>Expense</h4>
                      <p>
                        For analyzing the New York City expense condition,
                        we used the Airbnb listing dataset downloaded from
                        Inside Airbnb. It is in CSV format, containing
                        Airbnb costs in New York City. The cleaning steps
                        include dropping columns in the dataset that are not
                        related to expense condition, extracting prices from
                        strings.
                      </p>
                      <p>
                        Datatype: <br />
                        Categorical: neighbourhood_group_cleansed,
                        neighbourhood_cleansed, <br />
                        Quantitative: price, weekly_price, monthly_price,
                        cleanning_fee Example: Manhattan, Harlem, $59.00,
                        $720.00, $1,690.00, $60.00
                      </p>
                      <h4>Host</h4>
                      <p>
                        For analyzing the New York City Airbnb Host
                        condition, we used the Airbnb listing dataset
                        downloaded from Insider Airbnb. It is in CSV format,
                        containing Airbnb hosts information in New York
                        City. The cleaning steps include dropping columns in
                        the dataset that are not related to hosts condition,
                        extracting numbers from strings, transforming
                        categorical data to quantitative data according to
                        formulas we designed.
                      </p>
                      <p>
                        Datatype: <br />
                        Categorical: neighbourhood_group_cleansed,
                        neighbourhood_cleansed, host_response_time,
                        host_is_superhost <br />
                        Quantitative: host_response_time, host_response_rate
                        Example: Manhattan, Harlem, within a few hours, 70%,
                        t
                      </p>
                    </div>
                  </div>
                </div>

                {/* section 3 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        3 Data Analysis
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h4>Airbnb Reviews</h4>
                      <p>
                        All reviews are text data from the “comments” column
                        of the Airbnb listing review dataset. We
                        preprocessed these texts by removing stop words,
                        lemmatizing each word and removing non-English
                        sentences. Then we tokenizes all reviews and
                        comments into sentences. We made a word cloud plot
                        to encode word frequency for better understand this
                        text dataset. As we can see from the plot, people
                        are very concerned about transportation convenience.
                      </p>
                      <figure>
                        <img
                          title="Word Cloud for Airbnb Reviews"
                          src="/images/about/3-1.png"
                          className="image-center"
                          style={{ width: "30%" }}
                        />
                        <figcaption className="text-center">
                          Figure 3.1 - Word Cloud for Airbnb Reviews
                        </figcaption>
                      </figure>
                      <h4>Entertainment</h4>
                      <p>
                        The data we leveraged to analyze entertainment is
                        scraped from Yelp business listings by Python. The
                        data is categorized into three categories, namely
                        shopping, restaurant and nightlife. The result of
                        EDA will be applied in the visualization part. The
                        bar plot presents that Subway is the restaurant that
                        has most stores in NYC. The sum of restaurants,
                        shopping stores and nightlife spots are used to rate
                        the neighborhood of that aspect.
                      </p>
                      <figure>
                        <img
                          title="Top 10 Restaurants In NYC"
                          src="/images/about/3-2.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 3.2 - Top 10 Restaurants In NYC
                        </figcaption>
                      </figure>
                      <h4>Noise</h4>
                      <p>
                        The data we used to analyze noise level at New York
                        City is captured from 311 service request of all 5
                        boroughs in 2015. The data set is posted on NYC Open
                        Data as well. From the original data set, we created
                        two bar plots and a map. The bar plot reveals that
                        the most noise complaints are residential and
                        Manhattan is the most noisy borough.We also
                        normalized the noise incident count in each
                        neighborhood by its population and set them to 0-10
                        score by percentage.
                      </p>
                      <figure>
                        <img
                          title="Noise Complaint Type Count"
                          src="/images/about/3-3.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 3.3 - Noise Complaint Type Count
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          title="Noise Complaints Count By Borough"
                          src="/images/about/3-4.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 3.4 - Noise Complaints Count By Borough
                        </figcaption>
                      </figure>
                      <p>
                        The map illustrate that although residential noise
                        complaint has largest amount, vehicle and unspecific
                        complaint types are the ones that happens almost
                        everywhere in the city.
                      </p>
                      <figure>
                        <img
                          title="NYC Noise Complaint Type Map"
                          src="/images/about/3-5.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 3.5 - NYC Noise Complaint Type Map
                        </figcaption>
                      </figure>
                      <p>
                        After we aggregated the data to the neighborhood
                        level, we made a histogram to figure out the
                        distribution of complaint amount in NYC. It is
                        obvious that the majority neighborhoods received
                        less than 5000 noise complaints in 2015.
                      </p>
                      <figure>
                        <img
                          title="Noise Complaint Type Frequency In Each Neighborhood"
                          src="/images/about/3-6.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 3.6 - Noise Complaint Type Frequency In
                          Each Neighborhood
                        </figcaption>
                      </figure>
                      <h4>Safety</h4>
                      <p>
                        We applied 2014-2015 New York City Crimes reported
                        in all 5 boroughs to analyze the safety in each
                        neighborhood. The data set is published by New York
                        City agencies and other partners on NYC Open Data.
                        We create two basic bar plots and a map. The bar
                        plot in tell us that the most common crime in NYC is
                        petit larceny and most crime succeeded. We also
                        normalized the safety count in each neighborhood by
                        its population and set them to 0-10 score by
                        percentage.
                      </p>
                      <figure>
                        <img
                          title="Ten most common crimes in NYC"
                          src="/images/about/3-7.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 3.7 - Ten most common crimes in NYC
                        </figcaption>
                      </figure>
                      <h4>Transit</h4>
                      <p>
                        For analyzing the New York City transportation
                        condition, we used the Bus Stop Shelters dataset and
                        Subway Entrance dataset downloaded from NYC Open
                        Data. The Bus Stop Shelters dataset is in CSV format
                        which contains the locations of bus stop shelters in
                        NYC. The Subway Entrance dataset is in CSV format
                        which contains the locations of subway entrances in
                        NYC. Aside from these two main datasets, we also
                        used the NYC Neighborhoods dataset downloaded from
                        Inside Airbnb. It is in GEOJSON format and will be
                        used for conducting spatial analysis to calculate
                        the number of bus stop shelters and subway entrances
                        in each neighborhood in New York City. The cleaning
                        steps include extracting longitude and latitude from
                        strings, building functions to assign points to
                        corresponding neighborhoods based on their
                        geolocation information.
                      </p>
                      <h4>Expense</h4>
                      <p>
                        For analyzing the New York City expense condition,
                        we used the Airbnb listing dataset downloaded from
                        Inside Airbnb. It is in CSV format, containing
                        Airbnb costs in New York City. The cleaning steps
                        include dropping columns in the dataset that are not
                        related to expense condition, extracting prices from
                        strings.
                      </p>
                      <h4>Host</h4>
                      <p>
                        For analyzing the New York City Airbnb Host
                        condition, we used the Airbnb listing dataset
                        downloaded from Insider Airbnb. It is in CSV format,
                        containing Airbnb hosts information in New York
                        City. The cleaning steps include dropping columns in
                        the dataset that are not related to hosts condition,
                        extracting numbers from strings, transforming
                        categorical data to quantitative data according to
                        formulas we designed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* section 4 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        4 Task Analysis
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <caption className="text-center">
                          Table 4.1 - Task Analysis
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">Domain Task</th>
                            <th scope="col">Process</th>
                            <th scope="col">Goal </th>
                            <th scope="col">Analytic Task (Low-level)</th>
                            <th scope="col">Search Task (Mid-level) </th>
                            <th scope="col">Analyze Task (High-level)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Which neighborhood is the most safe
                              neighborhood?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Compare safety performance of different
                              neighborhoods and present the result in a
                              choropleth map
                            </td>
                            <td>Compare</td>
                            <td>Look Up </td>
                            <td>Discover</td>
                          </tr>
                          <tr>
                            <td>
                              Which neighborhoods are more convenient for
                              transit?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Compare transit performance of different
                              neighborhoods and present the result in a
                              choropleth map
                            </td>
                            <td>Compare</td>
                            <td>Look Up </td>
                            <td>Discover</td>
                          </tr>
                          <tr>
                            <td>
                              Which neighborhoods are more affordable to
                              live?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Compare expense level of different
                              neighborhoods and present the result in a
                              choropleth map
                            </td>
                            <td>Compare</td>
                            <td>Look Up </td>
                            <td>Discover</td>
                          </tr>
                          <tr>
                            <td>Which neighborhoods are quiet?</td>
                            <td>Classify Task</td>
                            <td>
                              Compare count of noise incidents of different
                              neighborhoods and present the result in a
                              choropleth map
                            </td>
                            <td>Compare</td>
                            <td>Look Up </td>
                            <td>Discover</td>
                          </tr>
                          <tr>
                            <td>
                              Which neighborhoods have more entertainment
                              spots?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Compare the count of entertainment spots of
                              different neighborhoods and present the result
                              in a choropleth map
                            </td>
                            <td>Compare</td>
                            <td>Look Up </td>
                            <td>Discover</td>
                          </tr>
                          <tr>
                            <td>
                              Which neighborhoods have better airbnb living
                              experience?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Compare airbnb host performance of different
                              neighborhoods and present the result in a
                              choropleth map
                            </td>
                            <td>Compare</td>
                            <td>Look Up </td>
                            <td>Discover</td>
                          </tr>
                          <tr>
                            <td>
                              What is the overall living experience of a
                              certain neighborhood?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Aggregrate noise, safety, expense, nightlife,
                              shopping, restaurant and transit score of
                              different neighborhoods and present the result
                              in a radar plot
                            </td>
                            <td>Summarize</td>
                            <td>Browse </td>
                            <td>Present</td>
                          </tr>

                          <tr>
                            <td>
                              What are the true living experience of a
                              certain neighborhood?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Summarize airbnb listing review into overview
                              and present the result using overview
                              paragraph
                            </td>
                            <td>Summarize</td>
                            <td>Look Up </td>
                            <td>Present</td>
                          </tr>
                          <tr>
                            <td>
                              What are people say regarding the hot topics
                              of a certain neighborhood?
                            </td>
                            <td>Classify Task</td>
                            <td>
                              Summarize airbnb listing review by topics and
                              use scatter plot to encode topic key word
                              frequency
                            </td>
                            <td>Summarize</td>
                            <td>Look Up </td>
                            <td>Present</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* section 5 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        5 Model Description
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h4>Introduction</h4>
                      <p>
                        There are a great amount of review data from the
                        Airbnb. All these reviews should be effectively
                        summarized to give useful guides to visitors. Since
                        we don't have the labeled data, we focus on
                        unsupervised extractive summarization techniques
                        that work by modeling word distribution and sentence
                        similarities in the text. In the following
                        description, we refer all reviews in a neighborhood
                        as a document. The methods described below includes
                        single-document summarization, multi-document
                        summarization and query based summarization methods.
                      </p>
                      <h4>Text Preprocessing</h4>
                      <p>
                        In the first, all the reviews were tokenized into
                        sentences. And to get more comprehensive summary, we
                        removed questions, short sentences with less than
                        five words, sentences starting with personal pronoun
                        or names, as well as contents in brackets and
                        contractions. Then we converted all alphabets into
                        lower cases, removed punctuation and non-english
                        words, and did words lemmatization and stemming.
                      </p>
                      <h4>KL-SUM</h4>
                      <p>
                        We starts with the simple KL-SUM algorithm [4] that
                        introduces a criterion with Kullback-Lieber
                        divergence. The KL divergence is defined as
                        <InlineMath>
                          {"KL(P||Q) = \\sum_x P(x)log\\frac{P(x)}{Q(x)}"}
                        </InlineMath>
                        . This algorithm selects a summary by minimizing{" "}
                        <InlineMath>{"KL(P_D||P_S)"}</InlineMath>.{" "}
                        <InlineMath>{"KL(P_D||P_S)"}</InlineMath> represents
                        the divergence between the document unigram
                        distribution <InlineMath>{"P_D"}</InlineMath> and
                        the empirical unigram summary distribution{" "}
                        <InlineMath>{"P_S"}</InlineMath>. In other word,
                        this criterion casts summarization as finding a set
                        of summary sentences which closely match the
                        document unigram distribution.
                      </p>
                      <h4>LDA-SUM</h4>
                      <p>
                        LDA-SUM [4] is a multi-document summarization
                        technique. Apart from using same KL-divergence
                        criterion as before, LDA-SUM uses a learned content
                        distribution instead of the raw unigram
                        distribution. After performing Latent Dirichlet
                        Allocation on multiple documents with predefined $N$
                        topics, we select a summary for a document by also
                        minimizing <InlineMath>{"KL(P_D||P_S)"}</InlineMath>
                        . But here, both <InlineMath>{"P_S"}</InlineMath>{" "}
                        and
                        <InlineMath>{"P_D"}</InlineMath> represents the
                        distributions on <InlineMath>{"N"}</InlineMath>{" "}
                        topics.
                      </p>
                      <h4>
                        Summarization by Clustering Sentences Embedding
                      </h4>
                      <p>
                        The previous two methods only use unigram word
                        distribution and do not consider the order and
                        context of words in a sentence. Thus, in this
                        section, we use an unsupervised text summariztion
                        technique based on sentence embedding [5]. To get
                        sentences embedding of high quality, we use ELMo [6]
                        which is a deep contextualized word representation
                        the models both complex characteristics of word use
                        and how these uses vary across linguistics contexts.
                        ELMo is pretrained on a large text corpus including
                        queries, its encoder is able to capture the meaning
                        and context of various sentences. These word vectors
                        are learned functions of the internal states of a
                        deep bidirectional language model (biLM), which is
                        pre-trained on a large text corpus. This
                        summarization model performs summarization tasks by
                        K-means clustering sentence embeddings near each
                        other in terms of simple Euclidean distance and
                        simply choosing that sentence from the text whose
                        embedding is the nearest, in terms of to the center
                        of each cluster. Then the sentences selected are a
                        summary of this document. One of the biggest
                        advantages of this model is that it can generate
                        concise summaries including different aspects of
                        this document with low redundancy. We refer this
                        method as Cluster-Sum in the following sections.
                      </p>
                      <h4>Query-based Summarization with Word Embedding</h4>
                      <p>
                        Query-based summarization can meet users’ needs
                        better because users might need more more specific
                        information from others’ review. Extractive text
                        summarization is also known as sentence ranking and
                        this ranking process can be changed into
                        query-oriented summarization [7]. The key words and
                        phrases that tourists care about can be used the
                        queries, and the query-based model is able to
                        generate related summaries. We also first used ELMo
                        to convert sentences into tensors, and then the
                        relevance score is calculated by the cosine
                        similarity between query{" "}
                        <InlineMath>{"E_q"}</InlineMath> and the sentences{" "}
                        <InlineMath>{"E_s"}</InlineMath>,{" "}
                        <InlineMath>
                          {
                            "S(Q,D) = cos(E_q,E_s) = \\frac{E_q \\dot E_s}{\\lVert E_q \\rVert \\lVert E_s \\rVert}"
                          }
                        </InlineMath>
                        . We randomly select five sentences from top 10\%
                        sentences after ranking to remove redundancy.
                      </p>
                      <h4>Results</h4>
                      <p>
                        Since the performances of KL-SUM and LDA-SUM are
                        much worse than Cluster-Sum and the generated
                        summaries are redundant, we only include the results
                        from Cluster-Sum and Query-based summarization
                        method for Eastern Parkway in the following table:
                      </p>
                      <table className="table table-hover">
                        <caption className="text-center">
                          Table 5.1 Extractive Summary
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Summary</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Hosts' descriptions</td>
                            <td>
                              Tons of restaurants, bars, clubs, venues
                              within short walking distance. It is full of
                              great restaurants, bars, and night life. Lots
                              of good food and bars, all types of cuisines.
                              Its located in a quiet family brownstone. But
                              lots going on - live music, museum, botanic
                              garden, etc.
                            </td>
                          </tr>
                          <tr>
                            <td>Guests' reviews</td>
                            <td>
                              It is clean, spacious, stylish and in a great
                              location. It's on a quiet street--unusual for
                              that area--and located close to restaurants,
                              grocery stores, and coffee shops in both
                              directions. Great place in a great location
                              Very basic but comfortable and clean. It has
                              all you need to guarantee a comfortable stay
                              and it is really clean and quiet.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: shopping</td>
                            <td>
                              Easy walking to shops, restaurants etc.
                              Walking distance to drug stores, grocery
                              stores, great restaurants and shopping.
                              Shopping areas and good food spots! Fantastic
                              local eating places, shops and intertainment.
                              Convenient area to grocery, resturants,
                              transit.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: transit</td>
                            <td>
                              Parking and transportation: Free parking on
                              service road. Close to major transit stations.
                              Proximity to transit and a CitiBike station
                              was great. Access to public transit was quick
                              and easy. Easy access to transit system with
                              high frequency.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: safety</td>
                            <td>
                              It's pretty convenient and safety place,
                              transportation is easy for landmarks. Location
                              is comfort for life. Very pleasure host, big
                              and clean apartment, safety avenue. Even sleep
                              masks, hygiene items, and fans for white
                              noise. Safety and distance are not an issue.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: expense</td>
                            <td>
                              Reasonable cost plus it is air
                              conditioned. Overall good value for money.
                              price and host’s kind manner etc. it is a good
                              value for money in that crazy expensive city!
                              Definitely good value for money.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: host</td>
                            <td>
                              Host was good with communication! Great spot
                              and host ! Great place, host and location!
                              It's cool, host didn't hover. Host was
                              accommodating and reachable.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: nightlife</td>
                            <td>
                              Walkable cool neighborhood not far from
                              restaurants and nightlife by subway. Close to
                              subway stops, nightlife, convince stores,
                              fresh markets, coffee shops. Excellent
                              location with easy access to transportation,
                              food, and nightlife. Wonderful spots nearby
                              for coffee, nightlife, groceries, trains, etc.
                            </td>
                          </tr>
                          <tr>
                            <td>Query: restaurants</td>
                            <td>
                              Plenty of shops, bars, and restaurants.
                              Restaurants and supermarket are
                              nearby. Laundry, delis, restaurants and stores
                              near by. grocery stores, supermarket, food
                              shops close by. Great coffee shops,
                              restaurants, bars, etc.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* section 6 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        6 Design Process
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h4>Low-Fidelity Prototype</h4>
                      <p>
                        Based on our task analysis, we start our
                        visualization design by building paper prototype,
                        below are our first iteration.
                      </p>
                      <figure>
                        <img
                          title="Choropleth Map Low-Fi Prototype"
                          src="/images/about/6-1.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 6.1 - Choropleth Map Low-Fi Prototype
                        </figcaption>
                      </figure>
                      <p>
                        This sketch illustrates a certain domain task that a
                        user wants to live in an affordable neighborhood.
                        The analytic task here is to compare the expense of
                        different neighborhoods, the search task here is to
                        locate the most affordable neighborhood and the
                        analyze task is to discover neighborhoods expense
                        condition. On the right side of the dashboard, there
                        is a map encoding geolocation using area mark for a
                        user to locate the certain neighborhood. It also
                        uses the color saturation channel to encode Airbnb
                        cost of different neighborhoods, which helps the
                        user to compare and locate the affordable
                        neighborhood he/she wants to live. For interactions,
                        I make the map zoomable and draggable. There is a
                        bar chart on the left side of the dashboard. It is
                        also interactive that user can drag to select
                        centrin price range then showing neighborhoods that
                        satisfying such price range on the map.
                      </p>
                      <figure>
                        <img
                          title="Radar Plot Low-Fi Prototype"
                          src="/images/about/6-2.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 6.2 - Radar Plot Low-Fi Prototype
                        </figcaption>
                      </figure>
                      <p>
                        We designed six metrics that we thought will be
                        helpful for the user to gather generalized
                        information about a certain neighborhood. These
                        metrics include Expense, Airbnb Host,
                        Transportation, Safety, Noise, and Entertainment. In
                        this sketch, the domain task is that a user wants to
                        get to know a certain neighborhood. The radar chart
                        on the left use point and area mark to encode the
                        quantitative scores of six metrics of a certain
                        neighborhood. I also add metric icons to make this a
                        infographic that helps memorization.
                      </p>
                      <figure>
                        <img
                          title="Hot Topics Plot Low-Fi Prototype"
                          src="/images/about/6-3.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 6.3 - Hot Topics Plot Low-Fi Prototype
                        </figcaption>
                      </figure>
                      <p>
                        In this sketch, the domain task is that a user wants
                        to read overview text information of a certain
                        neighborhood. The analytic task is to summarize, the
                        search task is to browse and the analyzed task is to
                        present. I use size and color channel to encode the
                        frequency of words appear in reviews of a certain
                        neighborhood and present that information in a word
                        cloud plot on the right side of the dashboard.
                      </p>
                      <h4>High-Fidelity Prototype</h4>
                      <p>
                        Based on usability test, we iteratively redesigned
                        our visualization and made high-fidelity prototype
                        using figma. Below are some screenshots:
                      </p>
                      <figure>
                        <img
                          title="Choropleth Map High-Fi Prototype"
                          src="/images/about/6-4.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 6.4 - Choropleth Map High-Fi Prototype
                          High-Fi Prototype
                        </figcaption>
                      </figure>
                      <figure>
                        <img
                          title="Radar Plot and Hot Topics Plot High-Fi Prototype"
                          src="/images/about/6-5.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 6.5 - Radar Plot and Hot Topics Plot
                          High-Fi Prototype
                        </figcaption>
                      </figure>
                      <p>
                        Since our visualizations are highly related to the
                        website. We designed a complete website flow this
                        time to connect all visualizations together. The
                        general idea is first entering the choropleth map
                        view, where you can select different aspects you
                        would like to know about different neighborhoods of
                        the city. For example, you can click “recreation”,
                        then click “restaurant count”, a corresponding
                        choropleth map will show on the right. The domain
                        task we are trying to address in this specific
                        webpage is to let user target their interested
                        neighborhoods. The analyze task is discover, search
                        task is explore, the query task is compare. They can
                        do so by either use the search bar or compare
                        different neighborhoods according to the choropleth
                        map. Once users know their interesting neighborhood,
                        they can see the detailed information dashboard of
                        the neighborhood by double-clicked the neighborhood
                        on the map, or simply use the search bar to
                        navigate. Then they will enter the detailed
                        neighborhood dashboard page. On this page, we
                        provide users with a radar plot encoding the
                        neighborhood overall performance and a text
                        summarization section with general neighborhood
                        overview and query based neighborhood overview. The
                        domain task we are trying to address in this
                        specific webpage is to let user gather detailed
                        information about the neighborhood. The analyze task
                        is discover, search task is browse, query task is
                        identify.
                      </p>
                      <p>
                        To be more specific on the updates of visualization
                        design:
                      </p>
                      <p>
                        1. The choropleth map. We redesigned the brushing
                        and linking of this visualization. There are three
                        linked visualization in all. First one is on the
                        left top, the icons that represent aspects of the
                        neighborhoods, second one is the choropleth map,
                        third one is the range bar plot on the bottom. We
                        use color to link the three sections together. For
                        example, when selected “recreation”, all of them
                        will become similar color. The brushing is added on
                        the range bar plot, we can use it to filter
                        neighborhood on the choropleth map.
                      </p>
                      <p>
                        2. The radar plot. We redesigned the interaction of
                        the radar plot. When you hover on the plot, detailed
                        scores will be shown.
                      </p>
                      <p>
                        3. Text visualization. We redesigned the visual
                        encoding of the text visualization. In last version,
                        we use word cloud plot to encode word frequency, but
                        according to feedback from progress report that this
                        will be hard to read. So this time we use circle
                        with text mark and size channel to encode word
                        frequency. Instead of making the word frequency a
                        simple bar chart, we use those button-like circle
                        instead. Because Bar chart will have low affordance,
                        which means user will not realize that this
                        something can be clicked. We try to make it looks
                        like a button, user will want to click on it, and
                        then our query-based overview relates to that word
                        will show. From usability test, we got suggestion
                        that it is a little messy when we placed text in the
                        circle so we placed the text under circles to make
                        the plot more user-friendly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* section 7 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        7 Final Visualization
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h4>Browsing View</h4>
                      <figure>
                        <img
                          title="Browsing View"
                          src="/images/about/7-1.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 7.1 - Browsing View
                        </figcaption>
                      </figure>
                      <p>
                        Browsing View is the landing view as user use our
                        app. It allows users to scan through the
                        neighborhood polygons of the city. As the mouse
                        pointer enters certain neighborhood polygon, the
                        neighborhood will be highlighted and the click
                        action will bring users to the Choropleth Map View.
                      </p>
                      <h4>Choropleth Map View</h4>
                      <figure>
                        <img
                          title="Choropleth View"
                          src="/images/about/7-2.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 7.2 - Choropleth View
                        </figcaption>
                      </figure>
                      <p>
                        A choropleth overview section of the left panel will
                        appear when a user click on a certain neighborhood
                        polygon in the Browsing View. The basic map becomes
                        a choropleth map showing certain quantitative
                        attribute of the neighborhoods. The Browse button
                        will direct the user back to the the Basic View.
                      </p>
                      <h4>Neighborhood Details View</h4>
                      <figure>
                        <img
                          title="Neighborhood View I - Radar Chart"
                          src="/images/about/7-3.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 7.3 - Neighborhood View I - Radar Chart
                        </figcaption>
                      </figure>
                      <p>
                        To enter the Neighborhood View, user can click
                        certain neighborhood on the map in Basic View. The
                        selected neighborhood will be zoomed and highlights.
                        The detailed information and visualizations about
                        this neighborhood will be shown in the left panel.
                        Click that neighborhood once on the map again to go
                        back to the Basic View.
                      </p>
                      <p>
                        A radial plot is generated to give users a overview
                        of the neighborhood in seven aspects: safety, noise,
                        restaurants, shopping, nightlife, expense and
                        safety. We can tell that shopping score in Midtown
                        is 10 and it is density of noise and crime incidents
                        is fairly high.
                      </p>
                      <p>
                        The radar plot uses polar coordinates with one
                        spatial position and one angle channel. Seven
                        categories are evenly distributed around a circle
                        using the angle channel. The natural coordinate
                        system in radar plots is polar coordinates where one
                        dimension is measured as an angle from a starting
                        line and the other, a.k.a score, is measured as a
                        distance from a center point. Radial plots is more
                        effective than rectilinear ones in showing the
                        pattern in each neighborhood.
                      </p>
                      <figure>
                        <img
                          title="Neighborhood View II - Hot Topics Plot"
                          src="/images/about/7-4.png"
                          className="image-center"
                        />
                        <figcaption className="text-center">
                          Figure 7.4 - Neighborhood View II - Hot Topics
                          Plot
                        </figcaption>
                      </figure>
                      <p>
                        We already present the general overview paragraph of
                        the living experience of certain neighborhood, now
                        we want to present topic overview, based on our
                        predefined topics including Safety, Expernse, Noise,
                        Transit, Shopping, Host, Nightlife and Restaurant.
                      </p>
                      <p>
                        We use circle with text mark and size channel to
                        encode word frequency. Instead of making the word
                        frequency a simple bar chart, we use those
                        button-like circle instead. Because Bar chart will
                        have low affordance, which means user will not
                        realize that this something can be clicked. we use
                        circle with text mark and size channel to encode
                        word frequency. We try to make it looks like a
                        button, user will want to click on it, and then our
                        query-based overview relates to that word will show.
                      </p>
                      <p>
                        D3.js is applied to built the above two interactive
                        plots. The code for the radar plot is inspired by
                        Nadieh Bremer and Brendan Sudol.
                      </p>
                    </div>
                  </div>
                </div>

                {/* section 8 */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        8 Conclusion
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseEight"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Our app provides summaries generated by our text
                        summarization models based on guests’ reviews and
                        hosts’ descriptions. For the text summarization
                        models, we preprocessed the data appropriately to
                        preserve the maximum level of truthfulness,
                        cleanness, and readability. And Cluster-Sum and
                        Query-based Sum are finally used in our web app
                        because they can meet users’ need better. Unlike
                        KL-Sum and LDA-Sum, Cluster-Sum can generate
                        summaries of low redundancy including different
                        aspect of this neighborhood. And Query-based Sum is
                        able to generate concise relevant summary based on a
                        user’ query.
                      </p>
                      <p>
                        To demonstrate the text summary and descriptive
                        information to the users, we developed a react web
                        app written with modern JavaScript in tandem with
                        d3.js for visualization. The interactive
                        visualizations allows us to pose questions from
                        multiple questions in one single plot. They are
                        particularly useful when users look for variation in
                        a neighborhood provided by the our model result.
                      </p>
                      <p>
                        For now, the target user group of the application is
                        travelers planning to go to the New York City. Our
                        future goal is to expend cities available in the
                        application. Also, after we start get real users
                        using the application, we will have user log data
                        and we can analyze the data to improve the user
                        experience of our current visualization design.
                      </p>
                    </div>
                  </div>
                </div>

                {/* section reference */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-block collapsed about-section-title"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Reference
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseNine"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        [1] Bloomberg L.P. (February 24, 2019). Company
                        Overview of Airbnb, Inc. Retrieved from
                        https://www.bloomberg.com/research/stocks/private/snapshot.asp?privcapId
                        =115705393
                      </p>
                      <p>
                        [2] Mann, Sonya (May 3, 2017). Why Airbnb Reviews
                        Don't Tell the Whole Story. Retrieved from
                        https://www.inc.com/sonya-mann/airbnb-nightmare-experiences.html
                      </p>
                      <p>
                        [3] Inside Airbnb. About - Inside Airbnb. Retrieved
                        from http://insideairbnb.com/about.html
                      </p>
                      <p>
                        [4] Aria Haghighi, Lucy Vanderwende. Exploring
                        Content Models for Multi-Document Summarization. The
                        2009 Annual Conference of the North American Chapter
                        of the ACL, pages 362–370.
                      </p>
                      <p>
                        [5] Aishwarya Padmakumar, Akanksha Saran.
                        Unsupervised Text Summarization Using Sentence
                        Embeddings.
                        https://www.cs.utexas.edu/~asaran/reports/summarization.pdf
                      </p>
                      <p>
                        [6] ELMo, Deep contextualized word representations.
                        Retrieved from https://allennlp.org/elmo
                      </p>
                      <p>
                        [7] Mahmood Yousefi-Azar, Len Hamey. Text
                        summarization using unsupervised deep learning.
                        Expert Systems With Applications 68 (2017) 93–105
                      </p>
                      <p>
                        [8] App Sleeping on Heroku. Retried from
                        https://blog.heroku.com/app\_sleeping\_on\_heroku
                      </p>
                      <p>
                        [9] Radar plot. Retrieved from
                        http://bl.ocks.org/nbremer/21746a9668ffdf6d8242
                      </p>
                      <p>
                        [10] D3 Responsive function. Retrieved from
                        https://brendansudol.com/writing/responsive-d3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default About;
