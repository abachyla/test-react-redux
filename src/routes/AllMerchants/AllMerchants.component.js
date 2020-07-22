import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Merchant from '../../components/Merchant/Merchant';
import {Header, Title, PageWrapper, Icon} from './AllMerchants.styled';
import PlusIcon from './assets/plus.svg';

class AllMerchants extends Component {
  componentDidMount() {
    if (this.props.merchants.length) return; //TODO remove, coz we always should get refreshed data from server

    this.props.fetchMerchants();
  }

  render() {
    const {loading, error, merchants, deleteMerchant} = this.props;

    return (
      <PageWrapper>
        <Header>
          <Title>All merchants</Title>
          <div>
            <Link to='/create'>
              <Icon src={PlusIcon}/>
                Add new merchant
            </Link>
          </div>
        </Header>
        <div>
          {!(error || loading) && merchants && merchants.map((merchant) =>
            <Merchant
              key={merchant.id}
              item={merchant}
              delete={deleteMerchant}
            />
          )}
          {loading && <p>Loading...</p>}
          {error && <p>Sorry, we could not load data</p>}
        </div>
      </PageWrapper>
    );
  }
}

AllMerchants.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  merchants: PropTypes.array,
  deleteMerchant: PropTypes.func.isRequired,
  fetchMerchants: PropTypes.func.isRequired
};

export default AllMerchants;