import "./Photo.css";

import { uploads } from "../../utils/config";

import { Message } from "../../components/Message/Message";
import { PhotoItem } from "../../components/PhotoItem/PhotoItem";

import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useSelector, dispatch, useDispatch } from "react-redux";

import { getPhoto } from "../../slices/photoSlice";

export const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <p className="container-loader">
        <span className="loader"></span>
      </p>
    );
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
    </div>
  );
};
