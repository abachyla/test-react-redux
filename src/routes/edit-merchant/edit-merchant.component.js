import React from 'react';
import PropTypes from 'prop-types';
import MerchantForm from '../../components/merchant-form/merchant-form';
import {PageWrapper, Title} from '../route.styled';

const EditMerchant = ({merchant, updateMerchant}) => {
  const update = (item) => updateMerchant(item);

  return (
    <PageWrapper>
      <Title>Edit a merchant</Title>
      <MerchantForm merchant={merchant}
                    submit={update}
                    submitTitle="Update"/>
    </PageWrapper>
  );
};

EditMerchant.propTypes = {
  updateMerchant: PropTypes.func.isRequired,
  merchant: PropTypes.object,
};

export default EditMerchant;
