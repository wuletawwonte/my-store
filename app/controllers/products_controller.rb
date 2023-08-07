class ProductsController < ApplicationController
  def index
    @response = Faraday.get('https://fakestoreapi.com/products').body
    @products = JSON.parse(@response)
  end
end
