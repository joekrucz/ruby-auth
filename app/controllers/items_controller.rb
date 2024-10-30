class ItemsController < ApplicationController
  before_action :authenticate_user!

  def index
    @items = current_user.items
  end

  def new
    @item = Item.new
  end

  def create
    @item = current_user.items.new(item_params)
    if @item.save
      redirect_to items_path, notice: 'Item was successfully added.'
    else
      render :new
    end
  end

  private

  def item_params
    params.require(:item).permit(:name)
  end
end
