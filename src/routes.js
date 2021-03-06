import React from "react"
import { Route, browserHistory } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"
import { configureUrlQuery } from 'react-url-query';
import Mapspage from "./layouts/Mapspage"
import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Aboutpage from "./layouts/Aboutpage"
import FAQpage from "./layouts/FAQpage"
import Matching from "./layouts/Matching"
import Plainpage from "./layouts/Plainpage"
import Recruitmentpage from "./layouts/Recruitmentpage"
import Contactpage from "./layouts/Contactpage"
import News from "./layouts/News"
import Events from "./layouts/Events"
import ExhibitorInfo from "./layouts/ExhibitorInfo"
import PageSection from "./components/PageSection"
import Exhibitors from "./layouts/Exhibitors"
import Coffee from "./layouts/Coffee"
import Diversitypage from "./layouts/Diversitypage"
import Sustainabilitypage from "./layouts/Sustainabilitypage"
import Previous from "./layouts/Previous"
//PageSection is added as layout to avoid warnings from phenomic for having the
//PageSections compoment that is used in ExhibitorInfo layout.
//Phenomic complains about not finding PageSection otherwise as it
//checks all documents in content if it has a corresponding layout

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Aboutpage,
      Matching,
      Contactpage,
      News,
      Events,
      ExhibitorInfo,
      FAQpage,
      Plainpage,
      PageSection,
      Previous,
      Exhibitors,
      Recruitmentpage,
      Coffee,
      Mapspage,
      Diversitypage,
      Sustainabilitypage
    }}
  />
);

configureUrlQuery({ history: browserHistory });

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
