# frozen_string_literal: true

class Api::V1::AccountsController < ApplicationController
  before_action :set_account, only: [:show, :destroy]

  # GET /api/v1/accounts
  def index
    accounts = Account.all
    render json: accounts, status: 200
  end

  # GET /api/v1/accounts/:id
  def show
    render json: @account, status: 200
  end

  # DELETE /api/v1/accounts/:id
  def destroy
    @account.destroy!
    render status: 200, json: { status: 200, result: 'ok' }
  end

  private

  def set_account
    @account ||= Account.find(params[:id])
  end
end
