class ProductComponent < ApplicationComponent
  param :title
  param :price
  option :image_url
  option :description, default: -> { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus.' }
end
