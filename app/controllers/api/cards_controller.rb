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
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid list id provided"
    render 'api/shared/error', status: :not_found
  end

  def update
    @card = Card.find(params[:id])

    if @card.update_attributes(card_params)
      render :update
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  def show
    @card = Card.find(params[:id])

    render :show

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  private

  def card_params
    params.require(:card).permit(:title, :list_id, :description, :due_date, :archived, labels: [])
  end
end
