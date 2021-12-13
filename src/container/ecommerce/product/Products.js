import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Radio, Spin, Skeleton,Select } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import FeatherIcon from 'feather-icons-react';
// import { PageHeader } from '../../../components/page-headers/page-headers';
// import { Main } from '../../styled';
// import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import { TopToolBox } from '../Style';
import "./product.css";
import { sorting,sortingLowHigh,filterByCities } from '../../../redux/product/actionCreator';
// import { Button } from '../../../components/buttons/buttons';
// import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
// import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
// import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));
const { Option } = Select;

const Product = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  // const searchData = useSelector(state => state.headerSearchData);

  // const [state, setState] = useState({
  //   notData: searchData,
  //   active: 'active',
  // });

  // const { notData } = state;

  // const handleSearch = searchText => {
  //   const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
  //   setState({
  //     ...state,
  //     notData: data,
  //   });
  // };
  const onChangeCities = value => {
    dispatch(filterByCities(value));
  };

  const onSorting = e => {
    dispatch(sorting(e.target.value));
  };
  const onSortingLowHigh = e => {
    dispatch(sortingLowHigh(e.target.value));
  };
  return (
    <>
      {/* <PageHeader
        style={{top:"0px"}}
        ghost
        title="Shop"
        buttons={[
          <div key="1" className="page-header-actions">
          
           
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      /> */}
    <div style={{marginTop:"120px"}}>
        <Row gutter={30}>
          <Col className="product-sidebar-col" xxl={5} xl={7} lg={7} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton paragraph={{ rows: 22 }} active />
                </Cards>
              }
            >
              <Filters />
            </Suspense>
          </Col>
          <Col className="product-content-col" xxl={19} lg={17} md={14} xs={24}>
            <TopToolBox>
              <Row gutter={0}>
                <Col xxl={7} lg={12} xs={24}>
                <div className="sort-head">  
                <Select    
                            style={{ width: 325}}
                            onChange={onChangeCities}
                            placeholder="Select City"
                        >
                            <Option value="Bangalore">Bangalore, Karnataka</Option>
                            <Option value="Munnar">Munnar, Kerala</Option>
                            <Option value="Coorg">Coorg, Karnataka</Option>
                            <Option value="Dandeli">Dandeli,Karnataka</Option>
                            <Option value="South Goa">Sout Goa,Goa </Option>
                            <Option value="North Goa">North Goa, Goa</Option>
                            <Option value="v">Virajpet, Karnataka</Option>
                            <Option value="Mysore">Mysore, Karnataka</Option>
                            <Option value="Chickmagalur">Chikmagalur, Karnataka</Option>
                            <Option value="k">Madikeri, Karnataka</Option>
                        </Select>
                        </div>
                        
                  {/* <AutoComplete
                    onSearch={handleSearch}
                    dataSource={notData}
                    placeholder="Search"
                    width="100%"
                    patterns
                  /> */}
                </Col>
                <Col xxl={7} lg={12} xs={24}>
                <div className="sort-head">  
                <Select    
                            style={{ width: 325}}
                            onChange={onChangeCities}
                            placeholder="Rooms"
                        >
                            <Option value="Mysore">Any</Option>
                            <Option value="Bangalore">1 Room</Option>
                            <Option value="Munnar">2 Rooms</Option>
                            <Option value="Coorg">3 Rooms</Option>
                            <Option value="Dandeli">4 Rooms</Option>
                        </Select>
                        </div>
                </Col>
                <Col xxl={10} xs={24}>
                  <div className="product-list-action d-flex justify-content-between align-items-center">
                    <div className="product-list-action__tab">
                      <span className="toolbox-menu-title"> Sort By:</span>
                      <Radio.Group  defaultValue="rate">
                        {/* <Radio.Button value="rate">All Sizes</Radio.Button>
                        <Radio.Button value="popular">Entire Home</Radio.Button>
                        <Radio.Button value="time"> Private Room</Radio.Button> */}
                        <Radio.Button onChange={onSorting} value="price">High-Low</Radio.Button>
                        <Radio.Button onChange={onSortingLowHigh} value="price1">Low-High</Radio.Button>
                      </Radio.Group>
                    </div>
                    {/* {(window.innerWidth <= 991 && window.innerWidth >= 768) ||
                      (window.innerWidth > 575 && (
                        <div className="product-list-action__viewmode">
                          <NavLink to={`${path}/grid`}>
                            <FeatherIcon icon="grid" size={16} />
                          </NavLink>
                          <NavLink to={`${path}/list`}>
                            <FeatherIcon icon="list" size={16} />
                          </NavLink>
                        </div>
                      ))} */}
                  </div>
                </Col>
              </Row>
            </TopToolBox>

            <Switch>
              <Suspense
                fallback={
                  <div className="spin d-flex align-center-v">
                    <Spin />
                  </div>
                }
              >
                <Route exact path={path} component={Grid} />
                <Route exact path={`${path}/grid`} component={Grid} />
                <Route exact path={`${path}/list`} component={List} />
              </Suspense>
            </Switch>
          </Col>
        </Row>
        </div>
    </>
  );
};

export default Product;
