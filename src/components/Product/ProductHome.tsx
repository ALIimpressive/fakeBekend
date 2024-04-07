import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchingAllCards } from "../../Features/actionCreators/inndex";
import { Iphotos } from "../../types/typest";
import { cardSlice } from "../../Features/slices";
import { basketSlice } from "../../Features/actionCreators/basketSlices";

const ProductHome: React.FC = () => {
  const { card, loader, error, limit, page } = useAppSelector((s) => s.cash);
  const { basket } = useAppSelector((b) => b.basket);
  const dispatch = useAppDispatch();

  const arrayPage = [];
  for (let i = 1; i <= 10; i++) {
    arrayPage.push(i);
  }

  useEffect(() => {
    dispatch(fetchingAllCards(limit, page));
  }, [page]);
  console.log(card, "sass");

  return (
    <div>
      <div id="home">
        <div className="container">
          {loader && <h1>Loading...</h1>}
          {error ? error : ""}
          <div className="home">
            {card.map((el: Iphotos) => (
              <Card sx={{ maxWidth: 345, width: "300px", height: "350px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.userId}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => dispatch(basketSlice.actions.addToBasket(el))} size="small">Add to Basket</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
            className="page"
          >
            {arrayPage.map((el) => (
              <div>
                <button
                  onClick={() => dispatch(cardSlice.actions.setPhotosPage(el))}
                >
                  {el}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
