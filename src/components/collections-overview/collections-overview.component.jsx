import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.components";
import "./collections-overview.styles.scss";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...collectionsOtherProps }) => (
        <CollectionPreview key={id} {...collectionsOtherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
