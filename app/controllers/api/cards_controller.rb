class Api::CardsController < ApplicationController
  rescue_from ActionController::ParameterMissing do
    @error = "Card cannot be blank"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def create
    list = List.find(params[:list_id])
    @card = Card.new(card_params.merge(list: list))

    if @card.save
      render :create, status: :created
    else
      @error = "Card title unprovided or invalid."
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid list id provided"
    render 'api/shared/error', status: :not_found
  end

  private

  def card_params
    params.require(:card).permit(:title)
  end
end
