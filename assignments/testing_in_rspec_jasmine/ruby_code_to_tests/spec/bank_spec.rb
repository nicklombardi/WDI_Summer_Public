require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('TD Bank')}

  describe ".new" do
    it "creates a bank object" do
      expect(bank).to_not eq nil
    end
    it "has no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe "#name" do
    it "has a name" do
      expect(bank.name).to eq 'TD Bank'
    end
  end

  describe "#create_account" do
    it "create adds an account" do
      bank.create_account('Checking', 500)
      expect(bank.accounts['Checking']).to eq 500
      expect(bank.accounts.count).to eq 1
    end
  end

  describe "#deposit" do
    it "makes deposits" do
      bank.create_account('Checking', 500)
      bank.deposit("Checking", 200)
      expect(bank.accounts['Checking']).to eq 700
    end
  end

  describe "#withdraw" do
    it "makes withdrawals" do
      bank.create_account('Checking', 500)
      bank.withdraw("Checking", 200)
      expect(bank.accounts['Checking']).to eq 300
    end
      it "doesn't allow overdraft" do
        bank.create_account('Checking', 500)
        bank.withdraw("Checking", 600)
        expect(bank.accounts['Checking']).to eq 500
    end
  end

  describe "#balance" do
    it "checks balance" do
      bank.create_account('Checking', 500)
      expect(bank.accounts['Checking']).to eq 500
    end

  end

end