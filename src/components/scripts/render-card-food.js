function render(goodsArr) {


  const containerGoods = document.querySelector('.feet-the-cat__wrapper')

  for (let brand in goodsArr) {

    const goodsIngArr = goodsArr[brand]; ///arrINg


    for (let ing in goodsIngArr) {

      const goodsW = goodsIngArr[ing] //arrW





      for (let w in goodsW) {

        if (+goodsW[w] > 0) {

          containerGoods.insertAdjacentHTML('beforeend', `
          <div class="feet-the-cat__card card-food">
            <div class="card-food__back back">
              <div class="back__elem back__elem_parallelogram"></div>
              <!-- /.card-food__parallelogram -->
              <div class="back__elem back__elem_corner"></div>
              <!-- /.card-food__corner -->

                      <div class="back__elem back__elem_lower">
                          <div class="back__img">
                            <img src="img/cart-food-bg.png" alt="Cat" />
                          </div>
                        <!-- /.back__img -->
                      </div>
                      <!-- /.card-food__lower -->

              <div class="card-food__info">
                <span class="card-food__tagline">${defaultHoverTagline}</span>
                <h3 class="card-food__title">${brand}</h3>
                <h4 class="card-food__subtitle">${ing}</h4>
                <div class="card-food__offer">
                  <span class="card-food__text"> </span>
                </div>
                <!-- /.card-food__offer -->
                <div class="card-food__price">
                  <span class="card-food__num">${w}</span>
                  <span class="card-food__unit">кг</span>
                </div>
                <!-- /.card-food__price -->
              </div>
              <!-- /.card-food__info -->
            </div>
            <!-- /.card-food__back -->
            <div class="card-food__description description">
            <p class="description__text">
                ${defaultCardText} </p> 
            <button class="card-food__btn">${defaultCardTextBtn}</button>
            </div>
            <!-- /.card-food__description -->
          </div>
          <!-- /.card-food -->
          `)
        } else if (goodsW[w] === 0) {
          containerGoods.insertAdjacentHTML('beforeend', `
          <div class="feet-the-cat__card card-food card-food_disabled">
            <div class="card-food__back back">
              <div class="back__elem back__elem_disabled back__elem_parallelogram"></div>
              <!-- /.card-food__parallelogram -->
              <div class="back__elem back__elem_disabled  back__elem_corner"></div>
              <!-- /.card-food__corner -->

                      <div class="back__elem back__elem_disabled back__elem_lower">
                          <div class="back__img back__img_disabled">
                            <img src="img/cart-food-bg.png" alt="Cat" />
                          </div>
                        <!-- /.back__img -->
                      </div>
                      <!-- /.card-food__lower -->

              <div class="card-food__info">
                <span class="card-food__tagline">${defaultHoverTagline}</span>
                <h3 class="card-food__title">${brand}</h3>
                <h4 class="card-food__subtitle">${ing}</h4>
                <div class="card-food__offer">
                  <span class="card-food__text"> </span>
                </div>
                <!-- /.card-food__offer -->
                <div class="card-food__price card-food__price_disabled">
                  <span class="card-food__num">${w}</span>
                  <span class="card-food__unit">кг</span>
                </div>
                <!-- /.card-food__price -->
              </div>
              <!-- /.card-food__info -->
            </div>
            <!-- /.card-food__back -->
            <div class="card-food__description description description_disabled">
            <p class="description__text">
               Печалька, ${ing} закончился. </p> 
            <button class="card-food__btn"></button>
            </div>
            <!-- /.card-food__description -->
          </div>
          <!-- /.card-food -->
          `)
        }
      }




    }

  }
}






