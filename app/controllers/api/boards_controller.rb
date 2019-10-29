class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
    render :index
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render :create, status: :created
    else
      @error = @board.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  # /api/boards/:id
  def show
    @board = Board.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    @error = "No board with id #{params[:id]}"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
