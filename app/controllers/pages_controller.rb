class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :legal, :lab]

  def home
  end

  def legal
  end

  def lab
  end
end
