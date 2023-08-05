class ProductComponent < ViewComponent::Base
  attr_reader :title

  def initialize(title:, price:, description:, category:, image:)
    @title = title
  end
end
